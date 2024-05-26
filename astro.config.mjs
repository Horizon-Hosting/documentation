import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import node from '@astrojs/node';

// https://astro.build/config
export default defineConfig({
	output: "server",
	adapter: node({
	  	mode: "standalone"
	}),
	integrations: [
		starlight({
			title: 'Knowledgebase',
			logo: {
				light: '/src/assets/logo-light.svg',
				dark: '/src/assets/logo-dark.svg',
				replacesTitle: true,
			},
			social: {
				github: 'https://github.com/Horizon-Hosting/documentation',
			},
			sidebar:  [
				{
					label: 'Billing',
					autogenerate: { directory: 'billing' },
				},
				{
					label: 'General',
					autogenerate: { directory: 'general' },
				},
				{
					label: 'Garrys Mod',
					autogenerate: { directory: 'gmod' },
				},
				{
					label: 'BeamMP',
					autogenerate: { directory: 'beammp' },
				},
				{
					label: 'Minecraft',
					autogenerate: { directory: 'minecraft' },
				},
				{
					label: 'Virtual Private Server',
					autogenerate: { directory: 'vps' },
				},
				{
					label: 'Legal',
					collapsed: false,
					autogenerate: { directory: 'legal' },
				}
			],
		}),
	],
});
