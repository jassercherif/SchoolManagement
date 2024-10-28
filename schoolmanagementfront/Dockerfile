FROM node:16

WORKDIR /app

COPY package*.json ./
RUN npm install 

COPY . .

# Change ownership to node user
RUN chown -R node:node /app

# Build the React app (if needed)
# RUN npm run build 

ENV PORT=5173

EXPOSE ${PORT}

USER node

CMD ["npm", "run", "front"]
