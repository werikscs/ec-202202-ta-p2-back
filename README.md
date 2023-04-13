# Clean Architecture
## Domain
Na camada de Regras de Negócio (Domain), é comum encontrar a estruturação de código utilizando os conceitos de Domain-Driven Design (DDD), que tem como objetivo modelar o domínio da aplicação de forma apropriada e eficiente. Nesse contexto, é comum encontrar as seguintes subpastas na camada de Domain:

**Entities:** essa subpasta contém as entidades do domínio, que representam os objetos fundamentais da aplicação. As entidades têm atributos e comportamentos que refletem as regras de negócio e são essenciais para o funcionamento da aplicação.

**Value Objects:** esta subpasta contém os objetos de valor, que são objetos que representam um valor importante para a aplicação, mas que não têm identidade própria. Os objetos de valor são imutáveis e são usados para representar conceitos que possuem um significado mais abstrato, como um intervalo de tempo, um endereço, uma moeda, etc.

**Services:** essa subpasta contém os serviços do domínio, que representam as operações de alto nível realizadas pela aplicação. Os serviços encapsulam a lógica de negócio e são usados para implementar comportamentos complexos que não podem ser atribuídos a uma única entidade.

**Repositories:** esta subpasta contém os repositórios do domínio, que são interfaces que definem a comunicação entre a camada de Regras de Negócio e a camada de Adaptadores. Os repositórios são responsáveis por fornecer uma interface para a persistência e recuperação das entidades do domínio.

Além dessas subpastas, também é comum encontrar outras subpastas que agrupam objetos relacionados, como **"Exceptions"** (para armazenar as exceções do domínio), **"Aggregates"** (para definir objetos compostos de entidades e objetos de valor) e **"Factories"** (para criar objetos complexos). A estruturação do código na camada de Regras de Negócio deve ser definida de acordo com a complexidade do domínio e as necessidades da aplicação.
## Application

**Use Cases:** essa subpasta contém as classes que implementam as operações de alto nível da aplicação, conhecidas como casos de uso. Os casos de uso são responsáveis por orquestrar as operações entre as camadas de Regras de Negócio e Adaptadores, garantindo que a lógica de negócio seja executada de forma correta e eficiente.

**DTOs:** esta subpasta contém os objetos de transferência de dados, que são utilizados para transferir informações entre as camadas de Aplicação e de Interface do Usuário. Os DTOs são classes simples que contêm apenas dados e não possuem lógica de negócio.

**Gateways:** essa subpasta contém as interfaces que definem as operações de comunicação entre a camada de Aplicação e a camada de Adaptadores. Os gateways são responsáveis por abstrair as tecnologias e detalhes de implementação, permitindo que a camada de Aplicação se mantenha independente de tecnologias externas.

Além dessas subpastas, também é comum encontrar outras subpastas que agrupam objetos relacionados, como **"Repositories"** (para implementar os repositórios definidos na camada de Regras de Negócio), **"Services"** (para implementar serviços de infraestrutura), **"Factories"** (para criar objetos complexos) e **"Exceptions"** (para armazenar as exceções da camada de Aplicação). A estruturação do código na camada de Aplicação deve ser definida de acordo com a complexidade da aplicação e as necessidades da equipe de desenvolvimento.
## Interface-Adapters

**Controllers:** esta subpasta contém as classes responsáveis por receber as requisições HTTP e repassá-las para a camada de Aplicação. Os controllers são responsáveis por transformar os dados recebidos em objetos de transferência de dados (DTOs), que são utilizados pela camada de Aplicação.

**Presenters:** essa subpasta contém as classes responsáveis por formatar os dados de saída da aplicação em uma resposta HTTP adequada para o cliente. Os presenters são responsáveis por transformar os objetos de transferência de dados (DTOs) retornados pela camada de Aplicação em um formato que possa ser enviado ao cliente.

**Views:** essa subpasta contém os arquivos de visualização, como arquivos HTML, CSS e JavaScript. As views são responsáveis por exibir os dados formatados pelo Presenter para o usuário final.

**Gateways:** essa subpasta contém as classes que implementam as interfaces definidas na camada de Aplicação. Os gateways são responsáveis por fazer a comunicação entre a camada de Aplicação e as tecnologias externas, como bancos de dados e serviços web.

Além dessas subpastas, também é comum encontrar outras subpastas que agrupam objetos relacionados, como **"Middlewares"** (para implementar middlewares de requisição HTTP), **"Adapters"** (para implementar adaptadores de tecnologias externas) e **"Exceptions"** (para armazenar as exceções da camada de Interface-Adapters). A estruturação do código na camada de Interface-Adapters deve ser definida de acordo com a complexidade da aplicação e as necessidades da equipe de desenvolvimento.
## Frameworks e Drivers
**Frameworks:** essa subpasta contém os frameworks ou bibliotecas utilizados pela aplicação para implementar as funcionalidades. Por exemplo, o framework Express para criar servidores HTTP, o framework React para criar interfaces de usuário, o framework Sequelize para acesso a banco de dados, etc.

**Drivers:** essa subpasta contém os drivers para as tecnologias externas utilizadas pela aplicação, como bancos de dados, serviços web, sensores, entre outros. Por exemplo, um driver para acesso a banco de dados MySQL, um driver para acesso a um serviço web REST, um driver para acesso a uma API de sensores, etc.

**Plugins:** essa subpasta contém plugins ou extensões que são utilizados pela aplicação para adicionar funcionalidades específicas. Por exemplo, um plugin para enviar e-mails, um plugin para gerar PDFs, um plugin para gerar relatórios, etc.

Além dessas subpastas, também é comum encontrar outras subpastas que agrupam objetos relacionados, como **"Middlewares"** (para implementar middlewares de requisição HTTP), **"Adapters"** (para implementar adaptadores de tecnologias externas) e **"Exceptions"** (para armazenar as exceções da camada de Frameworks e Drivers). A estruturação do código na camada de Frameworks e Drivers deve ser definida de acordo com a complexidade da aplicação e as necessidades da equipe de desenvolvimento.