## 1. Просмотр всех объявлений (для незарегистрированных пользователей)

- **Описание**: Позволяет незарегистрированным пользователям просматривать все доступные объявления.
- **Метод**: `GET`
- **Endpoint**: `/api/posts`
- **Не требует аутентификации**
  - **Пример ответа**:

[
{
"postId": 1
"subject": "Нужна помощь",
"header": "Требуется помощь с покупкой продуктов",
"user": {"name": "Иван Иванов", "email": "ivanov@example.com", "phoneNumber": 1254889, "roles":["USER"]},
"description": "Помогите купить продукты для пожилого человека",
"photoLink": "link_to_photo" | null
},
{
"postId": 2
"subject": "Предлагаю помощь",
"header": "Помощь в доставке",
"user": {"name": "Петр Петров", "email": "petrov@example.com", "phoneNumber": 1254889, "roles":["ADMIN", USER"]},
"description": "Могу доставить продукты",
"photoLink": "link_to_photo" | null
}
]

- **HTTP Status**: `200 OK` -**Страница на фронтенде**: Страница с карточками объявлений.

## 2. Фильтрация объявлений по теме

- **Описание**: Позволяет незарегистрированным пользователям фильтровать объявления по теме.
- **Метод**: `GET`
- **Endpoint**: `/api/posts/{subject}`
- **Не требует аутентификации**
  - **Пример ответа**:
    [  
    {
    "postId": 1
    "subject": "Нужна помощь",
    "header": "Требуется помощь с уборкой",
    "user": {
    -           "name": "Мария Смирнова",
      -       "email": "smirnova@example.com",
              "phoneNumber": 1254889,
              "roles":["USER"]
        },
        "description": "Помогите убраться дома",
        "photoLink": "link_to_photo"
        }
        ]
  -
- **HTTP Status**: `200 OK`
- **Страница на фронтенде**: Страница с карточками отфильтрованных объявлений.

## 3. Подача объявления (для зарегистрированных пользователей)

- **Описание**: Позволяет зарегистрированным пользователям подать новое объявление.
- **Метод**: POST
- **Endpoint**: `/api/posts`

  - **Пример запроса**:

    {

  - "userId": 1,
    "subject": "Нужна помощь",
    "header": "Требуется помощь с покупкой лекарств",
    "description": "Нужно купить лекарства для пожилого человека",
    "image": image.jpeg
    }
  - - **Пример ответа**:
      {
      "id": 1,
      "message": "Объявление успешно создано"
      }
    -

- **HTTP Status**: `201 Created`
- ** Страница на фронтенде**: Форма подачи объявления.

## 4. Редактирование объявления

- **Описание**: Позволяет зарегистрированным пользователям редактировать свои объявления.
- **Метод**: `PUT`
- **Endpoint**: `/api/posts/{id}`

  - **Пример запроса**:

    {
    "postId":1
    "header": "Требуется помощь с покупкой лекарств",
    "description": "Нужно купить лекарства для пожилого человека",
    "photoLink": "link_to_photo"
    }

  - **Пример ответа**:

        {
            "postId": 1,
            "message": "Объявление успешно обновлено"
        }

-
- **HTTP Status**: `200 OK`
- **Страница на фронтенде**: Форма редактирования объявления.

## 5. Удаление объявления

- **Описание**: Позволяет зарегистрированным пользователям удалять свои объявления.
- **Метод**: `DELETE`
- **Endpoint**: `/api/posts/{id}`
  - **Пример ответа**:
    {
    "message": "Объявление успешно удалено"
    }
-
- **HTTP Status**: `200 OK`
- **Страница на фронтенде**: Страница объявлений пользователя.

## 5.1 Удаление всех объявлений пользователя

- **Описание**: Позволяет зарегистрированным пользователям удалять свои объявления.
- **Метод**: `DELETE`
- **Endpoint**: `/api/posts/user/{id}`
  - **Пример ответа**:
    {
    "message": "Объявления успешно удалены"
    }
-
- **HTTP Status**: `200 OK`
- **Страница на фронтенде**: Страница объявлений пользователя.

- АУТЕНТИФИКАЦИЯ
-

## 6. Регистрация пользователя

- **Описание**: Позволяет незарегистрированным пользователям зарегистрироваться.
- **Метод**: `POST`
- **Endpoint**: `/api/auth/signing`
- **Не требует аутентификации**

  - **Пример запроса**:

  {
  "firstName": "Иван",
  "lastName": "Иванов",
  "email": "ivanov@example.com",
  "password": "password123"
  }

  - - **Пример ответа**:
      {
      "message": "Пользователь Иван Иванов зарегистрирован в ИД 1",
      }
    -

- **HTTP Status**: `201 Created` -**Страница на фронтенде**: Форма регистрации.

## 7. Логин пользователя

- **Описание**: Позволяет пользователям входить в систему для работы с объявлениями.
- **Метод**: `POST`
- **Endpoint**: `/api/auth`

  - **Пример запроса**:
    {
    "email": "ivanov@example.com",
    "password": "password123"
    }
    - **Пример ответа**:
      {
      "token": "jwt_token_string"
      }

- **HTTP Status**: `200 OK`
- **Страница на фронтенде**: Форма входа.

## 8. Редактирование профиля пользователя

- **Описание**: Позволяет зарегистрированным пользователям редактировать свои персональные данные.
- **Метод**: PUT
- **Endpoint**: `/api/users`

  - **Пример запроса**:
    {
    "id": 1,
    "firstName": "Иван",
    "lastName": "Иванов",
    "phoneNumber": "1234567890",
    }
  - - **Пример ответа**:
      {
      "message": "Пользователь Иван Иванов обновлён"
      }

- **HTTP Status**: `200 OK`
- **Страница на фронтенде**: Форма редактирования профиля.

## 9. Удаление пользователя

- **Описание**: Позволяет пользователям входить в систему для работы с объявлениями.
- **Метод**: `DELETE`
- **Endpoint**: `/api/users/{id}`

        - **Пример ответа**:
          {
          "message": "Пользователь удалён"
          }

- **HTTP Status**: `200 OK`
- **Страница на фронтенде**: Удаление Пользователя.

     
 src/components/Account/Account.tsx(7,19): error TS2307: Cannot find module '../Input/Input' or its corresponding type declarations.
[help-app-frontend] [2024-11-06 17:22:59] │        src/components/CreatePostForm/CreatePostForm.tsx(10,19): error TS2307: Cannot find module '../Input/Input' or its corresponding type declarations.
[help-app-frontend] [2024-11-06 17:22:59] │        src/components/SignInForm/SignInForm.tsx(5,19): error TS2307: Cannot find module '../Input/Input' or its corresponding type declarations.
[help-app-frontend] [2024-11-06 17:22:59] │        src/components/SingUpForm/SignUpForm.tsx(5,19): error TS2307: Cannot find module '../Input/Input' or its corresponding type declarations.
[help-app-frontend] [2024-11-06 17:22:59] │ 
[help-app-frontend] [2024-11-06 17:22:59] │ -----> Build failed
[help-app-frontend] [2024-11-06 17:22:59] │        
[help-app-frontend] [2024-11-06 17:22:59] │        We're sorry this build is failing! You can troubleshoot common issues here:
[help-app-frontend] [2024-11-06 17:22:59] │        https://devcenter.heroku.com/articles/troubleshooting-node-deploys
[help-app-frontend] [2024-11-06 17:22:59] │        
[help-app-frontend] [2024-11-06 17:22:59] │        Some possible problems:
[help-app-frontend] [2024-11-06 17:22:59] │        
[help-app-frontend] [2024-11-06 17:22:59] │        - Node version not specified in package.json
[help-app-frontend] [2024-11-06 17:22:59] │          https://devcenter.heroku.com/articles/nodejs-support#specifying-a-node-js-version
[help-app-frontend] [2024-11-06 17:22:59] │        
[help-app-frontend] [2024-11-06 17:22:59] │        - A module may be missing from 'dependencies' in package.json
[help-app-frontend] [2024-11-06 17:22:59] │          https://devcenter.