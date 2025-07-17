# Shopture --vite

## How to run the Docker Container

### Ensure you have docker installed on your machine - (obviously)

- Note my dockerfile isn't standard, just basic enough to run.

### How to build the Docker Container

- First, ensure you are in the root of shopture-fe
- Then run `docker build -t "shopture-vite:v1.0" .` **make sure you include the fullstop**
- Once the Docker image has been built _successfully_
- You can now run `docker run -p 9090:9090 -d --name shopture-vite shopture-vite:v1.0`
- The -d runs the container in the background.
- The `-p 9090:9090` simply means that forward any traffic on host port 9090 to container port 9090, where the vite app will be served.
- _Port 9090_, is the host port.
- _Port 9090_, is the container port, which is where the vite app in the docker container will be listening.
- The `--name shopture-vite` simply assigns a name for the running container, which you can optionally stop using `docker stop shopture-vite`
- The `shopture-vite:v1.0` is the name of the Docker image, realise it is similar to the one we used in the build command.

- If the `docker run -p 9090:9090 --name shopture-vite shopture-vite:v1.0` command is _successful_ open _http://localhost:9090/_ on your preferred browser and there you can view the vite app
