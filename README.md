# boring-avatars-generate-api
Nuxtを用いて特定のseed/size/variantに対してboring-avatarsを生成するAPIです。  

## Usage
### Request
- **GET** `/api/v1/generate`  
    - Query Parameters
        - `seed`: string
        - `size`: number
        - `variant`: string
