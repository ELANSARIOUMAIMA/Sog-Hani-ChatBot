# FROM defines the base image your container starts with.
FROM python:3.11-slim
# WORKDIR sets the working folder inside the container.
WORKDIR /app
# COPY copies files from your computer into the container.
# Copy everything from the current backend folder Into the current container folder (/backend)
# COPY . . # ❌ Yours - reinstalls ALL packages every time ANY file changes
# ✅ uses Docker cache layer, only reinstalls if requirements.txt changes
COPY requirements.txt .
# EXECUTED ONCE DURINNG IMAGE CREATION
# RUN pip install -r requirements.txt
# --no-cache-dir reduces image size
RUN pip install --no-cache-dir -r requirements.txt
COPY . .
# WHICH PORT USED BY THE APPLICATION INSIDE THE CONTAINER
EXPOSE 5000
# WHEN THE CONTAINER RUNS, THIS COMMAND WILL BE EXECUTED
CMD [ "python", "app.py" ]
