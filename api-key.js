- name: Build with secret
  run: |
    echo "window.HF_API_KEY = '${{ secrets.HF_API_KEY }}';" > public/api-key.js
- name: Show api-key.js content
  run: cat public/api-key.js
