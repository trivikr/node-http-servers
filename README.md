# node-http-tests
Comparing HTTP/1.1, HTTP/2 and QUIC with Node.js

## Pre-requisites

- Install **Node.js** by following these steps:
  1. Install [nvm](https://github.com/nvm-sh/nvm#installation-and-update)
  1. Install node v10.0.0 by running `nvm install 10` and `nvm use 10` in a terminal window
  1. Verify that node is installed by running `node -v` in a terminal window and confirm that it shows the latest version of `v10`, such as `v10.16.3`)
- Install [**tcpflow**](https://github.com/simsong/tcpflow) for inspecting TCP connections
  - Assuming you're using Linux, tcpflow can be installed by running
    - Debian/Ubuntu: `sudo apt-get install tcpflow`
    - Fedora/RedHat/CentOS: `sudo dnf install tcpflow`

## HTTP/1.1 server

* Run `node http.js`
* Visit [http://localhost:3000](http://localhost:3000) in your browser, and note that "Hello World" is displayed.