FROM node:18.12-bullseye-slim

RUN apt update && apt upgrade -y && apt install -y git
RUN git config --global --add safe.directory /workspace

USER node
