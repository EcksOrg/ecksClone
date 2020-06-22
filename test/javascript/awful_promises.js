// EC Test File
// An awful use of Promises

configuration.get_config(logger)
.then(data => {
    update_config(data)

    consumer = new kafka.Consumer(client, [
        { topic: 'configuration-update', partition: 0 },
        { topic: 'ledger-update', partition: 0, fromOffset: -1 }
    ])
    // Start consumer
    consumer_setup()
    
    // Start Express
    module_objects['radio'] = new modules["radio"].Radio(app, logger, config)
    
    app.listen(config['module']['port'], (error) => {
        if (error) {
            logger.error(error)
            process.exit(1)            
        }else {
            logger.info(`Started API server on port ${config['module']['port']}!`)
            express_running = true;
        }
    })
})
.catch((msg) => {
    console.log(msg)
    process.exit(1)
})