"use strict";
module.exports = {
    config: {
        activeTab: '🚀',
        updateChannel: 'stable',
        fontSize: 13,
        fontFamily: '"Fira Code", Menlo, "DejaVu Sans Mono", Consolas, "Lucida Console", monospace',
        shell: '/usr/local/bin/zsh',
        shellArgs: ['--login'],
    },
    plugins: [
        "hyper-font-ligatures",
        "hyper-search",
        "hyper-pane",
        "hyper-active-tab",
        "verminal"
    ],
    // verminal: {
    //   fontFamily: '"FiraCode Nerd Font", Menlo, "DejaVu Sans Mono", Consolas, "Lucida Console", monospace',
    //   fontSize: 16
    // }
    localPlugins: [
        "fig-hyper-integration"
    ]
};
