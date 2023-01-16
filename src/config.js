const debouncedReload = foundry.utils.debounce(() => window.location.reload(), 100);

export default [
    {
        name: 'enableCompendiumTranslation',
        data: {
            name: 'Kompendiuminhalte übersetzen',
            hint: 'Übersetzen der Kompendiuminhalte. Benötigt das Babele-Modul. (Bei Änderung wird Foundry neu geladen.)',
            scope: 'client',
            type: Boolean,
            config: true,
            default: true,
            onChange: debouncedReload
        }
    }
];
