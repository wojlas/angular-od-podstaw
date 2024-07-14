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
