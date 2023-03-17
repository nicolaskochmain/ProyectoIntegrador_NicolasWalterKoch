FROM amazoncorretto:11-alpine-jdk                                // de que imagen partimos
MAINTAINER Nicolas                                               // quien es el owner
COPY target/argentina-programa-0.0.1-SPAPSHOT.jar ap-app.jar     // va a copiar el empaquetado a github
ENTRYPOINT["java", "-jar", "/ap-app.jar"]                                                       // es la instruccion que se va a ejecutar primero
