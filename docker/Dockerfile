# Use GraalVM as parent image
FROM robertbio/graalvm:17

# Install Node.js component for GraalVM
RUN gu install nodejs

# # Use an official OpenJDK runtime as a parent image
# FROM openjdk:17-jdk-slim

# Set the working directory in the container
WORKDIR /app

# Copy the JAR file and dependencies into the container at /app
COPY wdk-test.jar /app/wdk-test.jar
COPY deps /app/deps

# The command to run the JAR file
CMD ["java", "-cp", "/app/deps/*:/app/wdk-test.jar", "com.biobam.wdk-lib.test.Main"]
