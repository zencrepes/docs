// @ts-check

// Sidebar of the current version (v2). The 1.x sidebar lives in
// versioned_sidebars/version-1.x-sidebars.json.

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  someSidebar: [
    'introduction',
    'architecture',
    {
      type: 'category',
      label: 'Capture data',
      collapsed: false,
      items: [
        'capture/quickstart',
        'capture/zqueue',
        'capture/opensearch',
        'capture/dashboards',
      ],
    },
    'roadmap',
  ],
};

export default sidebars;
