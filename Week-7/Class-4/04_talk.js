async function registerUser(){
    // collect data from frontend
    await collectData()
    validateUserEmail()

    await insertInDb()
    sendEmail()
    sendPushNotification()
}

registerUser()
    .then(()=>Console.log('Done'))
    .catch(()=>console.log('Something went wrong'))