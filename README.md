# node-http-tests
Comparing HTTP/1.1, HTTP/2 and QUIC with Node.js

## Pre-requisites

- Install **Node.js** by following these steps:
  1. Install [nvm](https://github.com/nvm-sh/nvm#installation-and-update)
  1. Install node v10.0.0 by running `nvm install 10` and `nvm use 10` in a terminal window
  1. Verify that node is installed by running `node -v` in a terminal window and confirm that it shows the latest version of `v10`, such as `v10.16.3`)
- Install [**netstat**](https://en.wikipedia.org/wiki/Netstat) for inspecting TCP connections
  - On Ubuntu, netstat can be installed by running `sudo apt-get install net-tools`

## HTTP/1.1 server

* Run `node http.js` in one terminal
* Run `netstat -ct` in another terminal
* Visit [http://localhost:3000](http://localhost:3000) in your browser
* Browser tab would display "Hello World".
* netstat terminal will display the new TCP connection created, for example:
  ```console
  Proto Recv-Q Send-Q Local Address           Foreign Address         State      
  tcp6       0      0 ip6-localhost:49116     ip6-localhost:3000      ESTABLISHED
  tcp6       0      0 ip6-localhost:3000      ip6-localhost:49116     ESTABLISHED
  ```
* After some time, the connections will be closed
  ```console
  Proto Recv-Q Send-Q Local Address           Foreign Address         State      
  tcp6       1      0 ip6-localhost:49116     ip6-localhost:3000      CLOSE_WAIT 
  tcp6       0      0 ip6-localhost:3000      ip6-localhost:49116     FIN_WAIT2
  ```