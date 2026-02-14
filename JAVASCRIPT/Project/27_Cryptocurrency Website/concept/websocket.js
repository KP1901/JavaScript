/*

1️⃣ new WebSocket() → Create Connection

const socket = new WebSocket("wss://example.com");

What it does:

-Creates a WebSocket object
-Starts handshake with server
-Tries to open connection

Without this, nothing works.

2️⃣ socket.send() → Send Data to Server

Used when YOU want to send data.

Example:

socket.send("Hello Server");

Or send JSON:

socket.send(JSON.stringify({
  type: "subscribe",
  symbol: "BTCUSDT"
}));

⚠ Important:
You can only send data after connection is open.

Check:

socket.onopen = () => {
  socket.send("Connected!");
};

3️⃣ socket.close() → Close Connection

Used when you want to stop communication.

socket.close();

You can also send code & reason:

socket.close(1000, "Finished work");

1000 = Normal closure

After this, connection is permanently closed.

4️⃣ addEventListener() (or event handlers)

WebSocket works based on events.

| Event   | When it runs           |
| ------- | ---------------------- |
| open    | Connection established |
| message | Data received          |
| error   | Error occurred         |
| close   | Connection closed      |

*/