FROM debian:bullseye-slim

RUN apt-get update && apt-get install -y \
    curl \
    zip \
    unzip \
    git \
 && apt-get clean \
 && rm -rf /var/lib/apt/lists/*
RUN git config --global --add safe.directory /workspace

RUN curl -fsSL https://deno.land/x/install/install.sh | sh
ENV DENO_INSTALL="/root/.deno"
ENV PATH="$DENO_INSTALL/bin:$PATH"
