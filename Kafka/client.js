const { Kafka } = require("kafkajs");

exports.kafka = new Kafka({
  clientId: "Kafka",
  brokers: ["<Private_ip>:9092"],
});