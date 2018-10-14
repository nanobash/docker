FROM nginx:latest

RUN apt-get -f install && \
    apt-get autoremove && \
    apt-get clean all && \
    apt-get update && \
    apt-get upgrade && \
    apt-get install -y apt-utils \
                        htop \
                        net-tools
