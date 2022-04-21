import { exec } from 'child_process';
import fs from 'fs/promises';
import { promisify } from 'util';

const run = promisify(exec);

function bail(msg: string) {
	console.error('ERROR', msg);
	process.exit(1);
}

(async function () {
	const cargo = await import.meta.resolve("../src-tauri/Cargo.toml'");
	const tauri = await import.meta.resolve('../src-tauri/tauri.conf.json');

	let [type] = process.argv.slice(2);
	if (!type) return bail('Missing version argument');

	if (!/(pre)?(major|minor|patch)/.test(type)) return bail(`Invalid version argument: "${type}"`);

	// auto-increments version
	// auto-runs `git tag v{NEXT}`
	await run(`npm version ${type}`);

	const { version } = await import('../package.json');

	console.log('-> bumped version to = ', version);

	let config = await import(tauri);

	config.package.version = version;

	let contents = JSON.stringify(config, null, 2);

	await fs.writeFile(tauri, contents);

	console.log('-> updated "tauri.conf.json" ');

	let toml = await fs.readFile(cargo, 'utf8');

	toml = toml.replace(/^version\s*=\s*"(.*)"\s*$/m, `version = "${version}"`);

	await fs.writeFile(cargo, toml);

	console.log('-> updated "Cargo.toml" ');

	await run(`git tag -d v${version}`);
	await run(`git add ${cargo} ${tauri}`);
	await run(`git commit -C HEAD --amend`);
	await run(`git tag v${version}`);
})().catch((err) => {
	return bail(err.stack);
});
