- name: Build with secret
  run: |
    echo "const HF_API_KEY = '${{ secrets.HF_API_KEY }}';" > public/api-key.js
