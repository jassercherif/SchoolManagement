# Use a base image that has JDK installed
FROM openjdk:17-jdk-slim

# Set the working directory
WORKDIR /app

# Copy the JAR file into the container
COPY target/schoolmanagementback-0.0.1-SNAPSHOT.jar app.jar

# Expose the port the app runs on
EXPOSE 7070

# Run the JAR file
ENTRYPOINT ["java", "-jar", "app.jar"]
