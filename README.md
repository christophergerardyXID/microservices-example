### Construir la imagen de docker
```$ docker build -t pokemons .```

### Ejecutar imagen
```$ docker run -p 3001:8080 --name pokemons pokemons```

### Crear una red
```$ docker network create microservices```

### Docker compose
```$ docker-compose up --build  ```

### Descargar una imagen de docker en local
```$ docker pull [image]```

### Darle nombre a nuestro contenedor
```$ docker container run --name micontenedor contenedor```

### Mostrar contenedores
```$ docker container ls```

### Detener un contenedor
```$ docker container stop [container-id]```

### Eliminar un contenedor
```$ docker container rm [container-id]```