import { listenAndServe } from "https://deno.land/std@0.113.0/http/server.ts";

listenAndServe(":80", () => new Response("Hello World\n"));

console.log("Started simple web server");
