# Use an official Python runtime as a parent image
FROM python:3.10-slim

# Set the working directory in the container
WORKDIR /app


# Copy requirements.txt to the working directory
COPY requirements.txt .

# Install dependencies from requirements.txt
RUN pip install -r requirements.txt

# Copy the entire python_files directory to /app in the container
COPY python_files/ /app/python_files/

# Set the PYTHONPATH to include the current directory and the python_files directory
ENV PYTHONPATH=/app:/app/python_files

# Run the script  using the module syntax

CMD ["python", "-m", "scripts.app"]

#CMD ["python", "-m", "scripts.startcomparator"]
