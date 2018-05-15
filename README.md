# promise-dedupe

    import dedupe from 'promise-dedupe';
    const raceConditionHandledRequest = dedupe('request-id', fetch(...));
