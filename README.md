# CSARCH2 Virtual Exhibit Proposal: ARPANET to World Wide Web

## Course

**CSARCH2 – Computer Architecture**

---

## Group Information

**Group Title:** The Internet’s Journey

**Members:**

* David Angelo Obar [12414794]
* Ronin Zerna [12412961]
* Ken Marthin Borbe [12409618]
* Harris Garzon [12411558]

**Section:** S05

---

## Project Overview

This project proposes a virtual exhibit that explores the evolution of computing from **ARPANET to the World Wide Web**, with a focus on the computer architecture concepts that enabled modern networked systems.

The exhibit highlights early limitations in hardware and communication, leading to the development of more efficient data transmission methods such as **packet switching** and **protocol layering**. It also presents how ARPANET introduced decentralized networking, how **TCP/IP** enabled communication across different systems, and how the **World Wide Web (WWW)** improved accessibility through hypertext and browsers.

---

## Proposed Features

* **Interactive Timeline (1958–1991)**
  A horizontally scrollable timeline presenting key milestones in internet development

* **Clickable Milestone Cards**
  Each milestone includes a short description, image, and its relevance to computer architecture

* **Interactive Activity**
  A comparative task demonstrating how users navigated information before and after the World Wide Web

* **Mobile-Responsive Design**
  Layout adapts for usability across desktop and mobile devices

---

## Key Content Areas

* Circuit Switching
* Packet Switching (ARPANET)
* TCP/IP
* Domain Name System (DNS)
* World Wide Web (WWW)

---

## Technical Plan

* **Runtime:** Node.js
* **Framework:** Astro
* **Components:** React (JSX)
* **Styling:** CSS
* **Content Format:** MDX
* **Version Control:** Git + GitHub

---

## Design Considerations

* Timeline presented as a **museum-style gallery experience**
* Frames and milestone cards expand to show detailed content
* Mobile interface supports **tap and swipe interactions**
* Layout ensures readability and accessibility across screen sizes

---

## Learning Goals

The exhibit aims to help users:

* Understand the historical progression from ARPANET to WWW
* Identify key innovations in network communication
* Recognize the importance of TCP/IP in system interoperability
* Appreciate how the WWW transformed human-computer interaction

---

## Project Scope

This project focuses on conceptual understanding rather than technical implementation of full network systems. The exhibit will present simplified representations of complex technologies to enhance learning and engagement.

## Development Log

### As of 07/07/2026

**Galleries (Origins, Structure, Birth)**
- Gallery I — Origins (1958–1971): DARPA founding → first ARPANET message → first email
- Gallery II — Structure (1973–1985): international ARPANET expansion → TCP proposal → TCP/IP standardization → DNS → first registered domain
- Gallery III — Birth of the Public Web (1990–1991): WWW's creation at CERN and ARPANET's shutdown, then public introduction in 1991

**Interactive Activity (Game component)**
- Terminal-command phase (pre-Web, 1983-style CLI) vs. hypertext-click phase (post-Web)

**View Navigation (App.jsx)**
- Single-page state-based routing (`currentView`) tying all galleries + game together

**Challenges**
- Finding images that fit well with the fixed gallery card dimensions without looking cropped or stretched
