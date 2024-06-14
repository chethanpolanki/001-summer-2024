# Module 1
1. Protocals
2. Web System Architecture
3. DNS Server - Diff. Types
## 1. Protocols
- Internet relies on numorous protocols to work properly
- Protocols are standards which enable the **_connection_**, **_communication_** and **_data transfer_** between two computers
- The Internet Protocal suite consists of various set of protocals
  - **TCP/IP** - Transmission Control Protocol/Internet Protocol
  - **HTTP** - Hypertext transfer protocol
  - **HTTPS** - Hypertext transfer protocol secure
  - **FTP** - File Transfer Protocal
  - **UDP** - User Datagram Protocal
 
- TCP IP Protocal
  - Defines how electronic devices should connect to the network
  - in os itself the TCP IP protocaol is embedded
  - TCP handels communication between devices
    - fixeds connection Protocol
    - Communication
      - it sends a request
      - request should be sent to the exact address
      - only after handshake the communication line opens
  - TCP IP Handshake
    - A send SYN to B
    - B recieves SYN from A
    - B sends ACK and SYN to A
    - A recives Both from B
    - A send ACK to B
    - B recieves ACK from A
    - **Socket connection is Established**
  - IP - Internet Protocal
    - IP handels the Communivcation between Computers
    - IP responsibiliy is to route each packet to its correct destination
    - IP communication breaks the message into pieces and send to the destination
    - IP is a connectionless Protocol
    - Every Computer have an IP address
  - TCP and IP
    - TCP and IP work together
    - TCP takes care of the communication between app soft and net soft
    - IP takes care of comm between different computers
    - TCP is responcible for breaking the packets before sending and attaching them after recieving
    - IP is responsible for routing the packets to correct destination
    - IPv4 : 32 BIT
    - IPv6 : 128 BIT
- HTTP
  - HTTP takes care of communication between web browser and web server
  - Before HTTP FTP was used
  - HTTP uses concept called hyperlinks
  - 4 messages of the protocal
    - Connection - establish- connection - client -server
    - Request - Ask for resource
    - Response - Delivers the resource
    - Close - Terminates the connection
- HTTPS
  - HTTP Secure
  - also called as HTTP over TLS(Transport Layer Security) / HTTP over SSL (secure socket layer)
  - It is for secure connection over Internet
  - Guarentees Identity of the server
- FTP
  - Used to transfer files from one computer to another computer
  - Authentication using a clear-text protocol
  - Anonymous connection can be allowed
  - FTPS - Secure FTP
- UDP
  - Connectionless
  - No handshake
  - No guarantee of delivery
  

## WEB-SYSTEM ARCHITECTURE
Refer this here [WEB-SYSTEM ARCHITECTURE](https://medium.com/@softkraft/web-application-architecture-complete-guide-diagrams-1b2d77fe3d2e)
## DNS SERVER and Different Types
