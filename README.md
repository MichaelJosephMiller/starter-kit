Download, install, and initialize the Cloud SDK. https://cloud.google.com/sdk/docs/

gcloud components update

gcloud projects create [YOUR_PROJECT_NAME] --set-as-default

gcloud projects describe [YOUR_PROJECT_NAME]

gcloud app create --project=[YOUR_PROJECT_NAME]

and then enable billing in that project.
https://console.cloud.google.com/billing/

Enable the Cloud Datastore, Cloud Pub/Sub, Cloud Storage JSON, Stackdriver Logging APIs.
https://console.cloud.google.com/apis/library

git clone https://github.com/GoogleCloudPlatform/nodejs-docs-samples

npm install

npm start

gclod app deploy

gcloud app browse