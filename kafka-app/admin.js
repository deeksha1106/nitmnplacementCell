const { kafka } = require("./client");

async function init() {
    const admin = kafka.admin(); //creating admin
    console.log("Admin connecting...");
    admin.connect();
    console.log("Admin Connection Success...");

    console.log("Creating Topic [deliveryman-updates]");
    await admin.createTopics({
        topics: [
            {
                topic: "rider-updates",
                numPartitions: 2,
            },
        ],
    });
    console.log("Topic Created Success [deliveryman-updates]");

    console.log("Disconnecting Admin..");
    await admin.disconnect();
}

init();