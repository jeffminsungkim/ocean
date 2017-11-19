<h1 align="center">
    웹 기술 스택 인벤토리
    <br>
    <br>
    <a href="#top"><img src="https://i.imgur.com/csmEY6z.gif" alt="note">
    <br>
</h1>
<p align="center">
    <br>
    |
    <b><a href="#front-end">Front-End</a></b> |
    <br>
    <a href="#angular">Angular</a>
    <br>
    <br>
    |
    <b><a href="#back-end">Back-End</a></b> |
    <br>
    <a href="#django">Django</a>
    <br>
    <br>
    |
    <b><a href="#library">Library</a></b> |
    <br>
    <a href="#rxjs">RxJS</a>
    <br>
    <br>
    <a href="http://www.sherv.net/"><img alt="Cheating at School" width=94 height=58 src="http://www.sherv.net/cm/emoticons/school/cheating-at-school-smiley-emoticon.gif"></a>
</p>

# Front-End
[*Presentation layer*](https://en.wikipedia.org/wiki/Presentation_layer)

Front-end web development is the practice of producing HTML, CSS and JavaScript for a website or Web Application so that a user can see and interact with them directly. 
The challenge associated with front-end development is that the tools and techniques used to create the front end of a website change constantly 
and so the developer needs to constantly be aware of how the field is developing.

> [Front-end web development] 참조

**Front-end focused**
+ Markup and web languages such as HTML, CSS, JavaScript, and ancillary libraries commonly used in those languages such as [Sass](https://en.wikipedia.org/wiki/Sass_(stylesheet_language)) or [JQuery](https://en.wikipedia.org/wiki/JQuery)
+ Asynchronous request handling and [AJAX](https://en.wikipedia.org/wiki/Ajax_(programming))
+ Cross-browser compatibility issues and workarounds
+ [Search engine optimization](https://en.wikipedia.org/wiki/Search_engine_optimization)
+ Basic usage of image editing tools such as GIMP or Photoshop
+ [Accessibility](https://en.wikipedia.org/wiki/Web_accessibility) concerns

## Angular

#### What is Angular?

Frontend JavaScript framework which was created and still maintained by Google. 
It's used to build incredibly powerful front-end applications.
Now it is possible to run Angular on a server using something like universal. But first and foremost it's a client-side framework.

Angular 4는 request 및 백엔드 서버로부터 response를 받기 위한 매우 직관적인 HTTP 컴포넌트를 가지고 있으며 RESTful API와 잘 어울린다.
Angular는 매우 인기 있는 MEAN 스택에서 중요한 부분을 차지하고 있다.

+ MongoDB is a very powerful NoSQL documented database
+ Express is a a back-end framework
+ Angular is a front-end framework
+ NodeJS is a JavaScript runtime that runs on Google's V8 JavaScript engine.

#### Why use Angular?

###### Rapid Development & Code Generation

Angular is a great framework for rapid front-end development. Things that are incredibly complicated to handle with plain JavaScript like routing, Ajax requests,
validation all that stuff is really simple with Angular and it's baked into the framework. 
Not only that but we have code generation and scaffolding tools with Angular CLI, we can generate components, services, routes and so on.

###### Code Organization & Productivity

Angular는 기능을 개별 컴포넌트로 나누기 때문에 코드를 깔끔하게 정리해준다.

Angular organizes your code very neatly. It breaks functionality up into individual components. For example, your navigation bar could be one component. 
Then you have your blog post which could be another, the search bar and even the single blog posts could be their own component.
We can also create services that can reach across all your components and they can send and receive data. 
So not only is this helpful to you but it's also helpful to anyone else it's going to be working with your code.

###### Dynamic Content

The Angular framewrok has often been described as what HTML would have looked like if it were created for dynamic applications rather than just static web sites.
Directives can be used as custom tags and then we can write dynamic functionality from within JavaScript. So instead of just having static HTML markup, we can have
templates that have things like variables as well as control structures like conditionals if statements, loops things like that.

###### Cross Platform

Angular is also completely cross platform it doesn't matter if your application is being viewed on Windows or Mac or Linux 
it doesn't matter if it's in Chrome or Firefox, edge or any other browser. All that stuff is handled for you within Angular.

###### Unit Testing Ready

Another really great thing about Angular's that also includes testing. 
You can write unit tests to make sure that all the functionality that you need is there and running correctly. 

#### Core Features

+ Components
+ Services
+ Routing
+ Testing
+ Build Tools
+ Data Binding
+ Templating
+ HTTP Module
+ Observables
+ Forms Module
+ Directives
+ Pipes
+ Animation
+ TypeScript

#### Major Version History
+ AngularJS / Angular 1
+ Angular 2
+ Angular 4
+ Angular 5

*Angular 3 was skipped dute to the misalignment of the router package version and rest of the packages included in Angular 2. 
The team decided to go right to Angular 4 from Angular 2. This way all the core packages were aligned and future development would be much easier to maintain.
They did this to avoid confusion. Unfortunately it did cause some other confusion in other places within the dev community. 
Maybe there are other reasons that Angular 3 was skipped as well. But the router played a huge part in it.*

###### AngularJS/ Angular 1

+ Released in 2010 by Google
+ It was a competitor to frameworks like Ember and Backbone.js
+ Used Controolers & Scope

These were the two main aspects of the framework. The scope was defined to bind data from the model to and from the view.
It was excellent for two way data binding.

###### Angular 2

+ Released in 2015
+ Complete Re-write of the framework of AngularJS
+ No Contrllers & No Scope (Everything is going to now be put into components)

As you could have imagined the developers that worked hard to learn AngularJS and build apps for their clients using AngularJS were really pissed off.
There's no backward compatibility. There's no simple guide to upgrade from AngularJS to Angular 2. You've basically just had to rewrite your entire application.

###### Angular 4

+ Relases in March 2017
+ In version 4, the creators have expressed that it's now to be just referred to as Angular
+ It's completely backward compatible with Angular 2
+ Reduced Size / More Compact / Faster Compile
+ Most of the other changes are under the hood

###### Angular 5

+ Angular 5 was released on November 1, 2017.
+ Key improvements in Angular 5 include support for progressive Web apps, a build optimizer and improvements related to Material Design.

#### What is a Component?

Angular applications have a common structure and they're made up of a few different entities including modules, services and components which are the bulk of most applications.
We can think pieces of the UI like headers, navigation bar, input boxes and so on as their own individual components with their own functionality.
Every Angular component includes a class which can have properties and methods or functions attached to it. A method is just a function inside of a class.
Components also have templates associated with them. And this is what the user actually sees in the browser. So we can also bind data from the component class 
to the template and vice versa.

+ The bulk of an Angular application
+ Pieces of UI
+ Include a clsas and a template
+ Bind from class -> template and class <- template

#### Why use Components?

+ Code organization
+ Break up the UI
+ Contain properties & methods
+ Promotes reusability
+ Better teamwork

#### Structure of a Component?

```typescript
import { Component } from '@angular/core';

@Component({
    selector: 'my-app'
    template: `<h1>Hello {{name}}</h1>`,
})

export class AppComponent {
    name = 'Angular';
}
```
`@ symbol is called a decorator` and it allows us to add meta data to our component. The selector what's used as the directive to insert the component in the HTML. 
Back ticks를 사용하게 되면 여러 줄의 HTML을 작성할 수 있게 된다. 
ts 파일 내에 마크업을 작성하는 대신 이처럼 templateURL을 사용하여 별도의 HTML 파일을 지정하여 분리할 수 있다.`templateUrl: './app.component.html'`
`Double curly brace {{}} is string interpolation` 이는 템플릿에 dynamic data를 삽입할 수 있도록 허용해준다. 
AppComponent 클래스에는 name이라는 string Angular를 담고 있는 프로퍼티가 있다. 이 name value를 `{{name}}`에 바인딩하게 된다.

```html
<body>
    <my-app> Loading AppComponent content here </my-app>
</body>
```
In this example here is where you would insert your component into the HTML. In this case we have a directive called `my-app` and that has to be equal to
whatever we chose for the selector in component class.

#### Generating Components with Angular-CLI

> $ ng g component components/my-component

*You can run a simple command like ng g for generate component and then wherever you want to put it.*

#### What is a Service?

서비스는 생성한 기능 또는 데이터를 여러 컴포넌트로 전송하는데 사용할 수 있는 클래스이다.

A service is a class that we can use to create and send functionality and data across multiple components.
This allows us to keep our components nice and lean and not have them be too bloated. But more importantly, it stops us from
having to repeat ourselves which is a big no-no and in just about programming language and or framework.

+ Keeps components lean
+ DRY - Don't repeat yourself
+ Ideal place for Ajax calls using the HTTP module

모든 컴포넌트가 중복되는 데이터를 사용하는데도 불구하고 컴포넌트마다 같은 Ajax 호출 및 Data fetching을 하는 코드를 넣으면 최악의 구조를 갖는 애플리케이션이 될 것이다.
서비스를 사용하게 되면 위와 같은 작업을 한 번만 서비스에 명시한 후 여러 컴포넌트 중에서 요구하는 컴포넌트에 한해 사용함으로써
매우 효율적임과 동시에 컴포넌트를 새로 추가하였는데 해당 데이터가 필요할 경우 간단히 서비스만 호출하면 되므로 매우 `scalable`해진다.

#### Steps to create a Service?

+ Create a new file `/services/my-service.service.ts`
+ Import `@Injectable` and create class (*Allows us to take this service and **injected it as a dependency** into a component*)
+ Add as a provider to `@ngModule`
+ Call from component(s) (You can bring it into any component and you can use any of your service functions inside that component)

```typescript
import { Injectable } from '@angular/core';

import { User } from './user';
import { USERS } from './mock-users';

@Injectable()
export class UserService {
    getUsers(): User[] { return USERS; }
}

```
As you can see we're importing the injectable package from Angular core and thenwe're also importing a User model (This would be like an interface or just a class model). 
Also we're importing some mock users, this would be like JSON file something that mimics fetching users from a database.
Then we have the injectable directive above the class.

#### Generating Services with Angular-CLI

> $ ng g service services/my-service

*You need to add as a provider manually.*

#### What is Observables?

[Observables](http://reactivex.io/documentation/observable.html) are not a feature that is specific to Angular.
Angular does take advantage of them but observables are part of `reactive extensions`.

*They will be a standard in ES7.* 

We can create a service function that will be an open data stream to our components. From our service, we can fetch and send data as an observable to the component.

The following code is going to open a data stream to this function and then every second it'll send data.

```typescript
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class DataService{
    data: Observable<Array<number>>;

    constructor(){ }

    getData(){
        this.data = new Observable(observer => {
            setTimeout(() => {
                observer.next(1);
            }, 1000);

            setTimeout(() => {
                observer.next(2);
            }, 2000);

            setTimeout(() => {
                observer.next(3);
            }, 3000);

            setTimeout(() => {
                observer.next('Hello');
            }, 4000);

            setTimeout(() => {
                observer.complete();
            }, 5000);
        });

        return this.data;
    }
}
```

The arrow (=>) function is part of ES6 as well as typescript. It's a different way of writing a callback function like below.

```typescript
getData() {
    this.data = new Observable(function(observer){

    });
}

```

```typescript
import { Component } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
    selector:'sandbox',
    template:`
        <ul class="list-group">
            <li class="list-group-item" *ngFor="let d of data">{{d}}</li>
        </ul>
    `
})

export class SandboxComponent{
    data:any[] = [];

    constructor(public dataService:DataService)
    {
        this.dataService.getData().subscribe(data => {
            this.data.push(data);
        });
    }
}
```
Since this is an observable we need to subscribe to it.

**[:rocket: Back to Front-End](#front-end)**

<br>



# Back-End
[*Data access layer*](https://en.wikipedia.org/wiki/Data_access_layer)

The backend of an application is responsible for things like calculations, business logic, database interactions, and performance. 
Most of the code that is required to make an application work will be done on the backend. 
Backend code is run on the server, as opposed to the client. 
This means that backend developers not only need to understand programming languages and databases, but they must have an understanding of server architecture as well. 
If an application is slow, crashes often, or constantly throws errors at users, it’s likely because of backend problems.

> [Front-end web development] 참조

**Back-end focused**
+ Scripting languages like Go, Nodejs, PHP, Python, Ruby, or Perl
+ [Automated testing frameworks](https://en.wikipedia.org/wiki/Automated_Testing_Framework) for the language being used
+ [Database administration](https://en.wikipedia.org/wiki/Database_administrator)
+ [Scalability](https://en.wikipedia.org/wiki/Scalability)
+ Security concerns, [authentication](https://en.wikipedia.org/wiki/Authentication) and [authorization](https://en.wikipedia.org/wiki/Authorization)
+ [Data transformation](https://en.wikipedia.org/wiki/Data_transformation)
+ [Backup](https://en.wikipedia.org/wiki/Backup) methods and software

## Django

#### AJAX and the CSRF Token

AJAX 코드를 만들 때 장고의 CSRF protection은 매우 거슬리는 존재가 된다. 장고에서 AJAX를 사용하는 경우 CSRF 토큰 유효성 검사를 trigger 하는 동안 API에 데이터를 POST, PATCH 또는 DELETE 하는 기능이
차단되는 것을 발견할 수 있다. 그러나 장고를 안전하게 만드는 요소 중 하나이므로 비활성화를 해서는 안 된다.

CSRF 허들을 뛰어 넘기 위해서는 다음과 같은 방법이있다.

1. 백엔드에서 POST, PATCH, DELETE 요청을 핸들 하는 API가 있을 때마다 항상 장고 REST framework를 사용한다.
1. 프론트엔드에선, 장고 REST framework의 built-in 자바스크립트 클라이언트 라이브러리를 사용하여 백엔드와 상호작용을한다. 이는 프레임워크에 독립적이며, CSRF 토큰을 자발적으로 처리한다.
1. 때론 DRF 클라이언트 프레임워크에서 제공하는 것보다 더 긴밀한 통신을 원할 때가 있다. 이 경우, CSRF 프레임워크에 계속 의존하는 것이 중요하다.

장고 코어 개발자 Aymeric Augustin이 말하길, 대부분의 개발자가 해결법을 찾지 못해서 CSRF protection을 거의 항상 비활성화해놓는다. 만약 API가 오직 [JWT](https://jwt.io/) 인증방식만을 허용한다면 
CSRF를 비활성화를 해도 되지만, 쿠키 인증을 허용한다면 비활성화를 해서는 안 된다. [django-rest-framework-jwt](https://getblimp.github.io/django-rest-framework-jwt/)를 사용하는 것이 아니라면 절대 CSRF를 비활성화한 상태로 사이트를 개발하면 안 된다.

#### Set settings.CSRF_COOKIE_HTTPONLY Appropriately

CSRF_COOKIE_HTTPONLY 토큰을 True로 설정하게 되면 악의적인 JavaScript가 CSRF protection을 우회하는 것을 어렵게 만든다. 단점이라면 JavaScript를 사용하여 쿠키에서 CSRF 토큰을 가져올 수 없다.
따라서 장고의 지시에 따라 숨겨진 CSRF 토큰 form input을 페이지에서 가져와야한다. 

jQuery-based example:

**Placing a Hidden CSRF Form Element**
```html
<html>
<!-- Placed anywhere in the page, doesn't even need to be in a form as teh input element is hidden -->
{% csrf_token %}
</html>
```
**Taking the CSRF Token from the DOM**
```javascript
var csrfToken = $('[name=csrfmiddlewaretoken]').val();
var formData = {
    csrfmiddlewaretoken: csrfToken,
    name=name, age=age
};

$.ajax({
    url: '/api/do-something/',
    data: formData,
    type: 'POST'
    })
```

**[:rocket: Back to Back-End](#back-end)**

<br>

# Library

## RxJS

###### The ReactiveX library for JavaScript.

[RxJS](http://reactivex.io/rxjs/) is a library for reactive programming using Observables, to make it easier to compose asynchronous or callback-based code. 
This project is a rewrite of [Reactive-Extensions/RxJS](https://github.com/Reactive-Extensions/RxJS) with better performance, 
better modularity, better debuggable call stacks, while staying mostly backwards compatible, with some breaking changes that reduce the API surface.

**[:rocket: Back to 웹 기술 스택 인벤토리](#top)**

<br>

---

## Author

© 2017  **Minsung Kim**.  *Written by - [JeffMinsungKim](https://github.com/jeffminsungkim)*

 [Front-end web development]: https://en.wikipedia.org/wiki/Front-end_web_development
 [Back-end web development]: https://www.upwork.com/hiring/for-clients/frontend-vs-backend-web-development/
