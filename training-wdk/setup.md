# Set up local development environment

You can set up a local development environment to edit the website content and push the changes to GitHub, just as you would with any software code.

Requirements: 
- Python 3
- Python 3 pip

## Clone the branch you want to edit

```bash
git clone git@github.com:BioBam/wdk-lib.git
cd wdk-lib/training-wdk
git checkout 3.3 # Or whichever the version that you want to change is. 
```

### Create a branch for your changes

Being in the branch of the version you want to change, create a new branch from that one to make your changes. 

```bash
git checkout -b my_feature
```

Push the changes into this branch when you're done and create a PR online, to the version you're changing.

## Set up a local virtual environment 

```bash
python -m venv myenv
source myenv/bin/activate # For macOS/Linux
# .\myenv\Scripts\activate # For Windows
```

This is only required the first time.

## Install the pip requirements into the environment

```bash
pip install -r requirements.txt
```

This is required the first time or if requirements change in the project.

## Run the server locally

```bash
mkdocs serve
```

As you change the files, the server will refresh the page available on `localhost:8000`.