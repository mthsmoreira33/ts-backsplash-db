import { Client} from "./models/Client";
import { Order } from "./models/Order";
import { clients } from "./database/clients";
import { orders } from "./database/orders";

const client1: Client = new Client("Armando", "123456", "mthsmoreira@gmail", "SC");
const date = new Date();
const order1: Order = new Order("Bathroom Installation", date);

client1.addOrder(order1);
console.log(client1);
