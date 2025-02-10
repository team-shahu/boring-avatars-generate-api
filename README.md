# boring-avatars-generate-api
Nuxtを用いて特定のseed/size/variantに対してboring-avatarsを生成するAPIです。  

## Usage
### Installation
環境変数に`NUXT_PUBLIC_API_BASE`を設定してください。  
```env
NUXT_PUBLIC_API_BASE=http://127.0.0.1:3000
```

### Request
- **GET** `/api/v1/generate`  
    - Query Parameters
        - `seed`: string
        - `size`: number
        - `variant`: string
