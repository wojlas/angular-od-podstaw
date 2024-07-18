# Angular od podstaw
  Lekki kurs angulara dla naszych drogich backendowych kolegów

## Podstawowe pojęcia:
  ### Moduł
  Wyodrębniona część aplikacji zawierająca własne komponenty, dyrektywy, pipe'y, guardy.
  Pozwala utrzymywać rozmiar aplikacji pod kontrolą, a także na łatwiejsze zarządzanie strukturą projektu.
  ### Komponent
   Część składowa angulara odpowiedzialna za renderowanie UI i interakcji z użytkownikiem.
    Składa się z 3 podstawowych plików: Typescript, HTML, CSS/SCSS + dodatkowo pliku z testami.
  ### Dyrektywy strukturalne
  Dyrektywy pozwalające na manipulowanie zawartością wyświetlaną w komponencie.
  Dotychczas poznaliśmy <b>*ngFor</b> i zaczęliśmy omawiać <b>*ngIf</b>.
  ### Serwis
  Klasa będąca singletonem w obrębie danego modułu, lub całej aplikacji.
  Po dodaniu jej w konstruktorze dowolnego komponentu (lub poprzez użycie funkcji inject), mamy dostęp do jego zasobów.
  ### Dyrektywa
  ### Pipe
  ### Guard
  ### Resolver
  ### Interceptor
  ### Serwis statyczny

## CLI
  <b>npm install -g @angular/cli</b> - instalacja angulara za pomocą terminala.<br>
  <b>ng new <nazwa_aplikacji></b> - tworzenie nowej aplikacji<br>
  <b>ng version</b> - sprawdzenie wersji CLI<br>
  <b>ng serve</b> - uruchomienie aplikacji lokalnie (domyślnie localhost:4200)<br>
  <b>ng build</b> - tworzy wersję produkcyjną aplikacji<br>
  <b>ng test</b> - odpala wszystkie testy w aplikacji<br>
  <b>ng generate component <nazwa_komponentu></b> - tworzenie komponentu. Można skrócić do ng g c <nazwa_komponentu>.<br>
  <b>ng g m <nazwa_modułu</b> - tworzenie modułu<br>
  <b>ng g s <nazwa_serwisu></b> - tworzenie serwisu<br>
  <b>ng g d <nazwa_dyrektywy></b> - tworzenie dyrektywy<br>
  <b>ng g p <nazwa_pipe'a></b> - tworzenie pipe'a<br>
  <b>ng g g <nazwa_guarda></b> - tworzenie guarda. W kolejnym kroku trzeba określić jego typ.<br>
  <b>ng g r <nazwa_resolvera></b> - tworzenie resolvera<br>
  <b>ng g interceptor <nazwa_interceptora></b> - tworzenie interceptora<br>

## Lekcja 1:
- Zapoznanie z angularem
- Omówienie pliku <b>package.json</b> (konfiguracja projektu, zarządzanie zainstalowanymi bibliotekami)
- Omówienie pliku <b>angular.json</b> (konfiguracja aplikacji angular)
- Stworzenie pierwszych komponentów
- Omówienie router outlet

## Lekcja 2:
- Dodanie plików ze stylami
- Krótkie omówienie podstawowych styli
- Tworzenie komponentów
- Stworzenie routingu aplikacji + podłączenie odpowiednich komponentów
- Omówienie <b>routerLink</b>, <b>routerLinkActive</b>
  - Wyświetlenie prostej listy (dyrektywa strukturalna <b>*ngFor</b>
  - Stworzenie pierwszego serwisu
  - Zastosowanie dyrektywy <b>*ngIf</b> (do omówienia następnym razem)
