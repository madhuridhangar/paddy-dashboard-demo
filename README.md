# CG Paddy Online Dashboard Case Study

A portfolio-ready case study for a live government procurement analytics platform built for **Chhattisgarh MARKFED, KMS 2025-26**.

## Overview

This project is a dashboard and analytics module for a live paddy procurement system. It tracks procurement, farmer participation, payment data, bag utilization, district-wise trends, and map-based location intelligence for mills and purchase centers.

## My Role

I designed and developed dashboard modules, charts, map screens, KPI cards, filters, and reporting views using:

- ASP.NET Web Forms
- C#
- MS SQL Server
- JavaScript
- Chart libraries for donut, line, and stacked bar graphs
- Leaflet.js / OpenStreetMap for maps and routing

## Main Features

### 1. Center Dashboard
- Total society count
- Total purchase centers
- Total storage centers
- NAN-CMR center count
- FCI-CMR center count
- Card-based summary widgets

### 2. Farmer Dashboard
- Registered farmers
- Total farmer rakba
- Rakba of paddy
- Farmers who sold paddy
- Total paddy purchased
- Card-based drill-down screens

### 3. Procurement Analytics
- Donut charts for total paddy purchase by farmer category
- Donut charts for total payment by farmer category
- Bag usage cards with progress indicators
- State-level stacked bar analysis for MOTA / PATLA / SARNA categories
- Percentage-based DO issue, lift, and balance tracking

### 4. Trend Analysis
- District-wise procurement daily data
- Time-series line graph for Mota / Patla / Sarna paddy
- Date-wise trend tracking
- District filter support
- Bilingual-friendly reporting interface

### 5. Maps and Routing
- Map view for mills and procurement centers
- Marker-based visualization across districts
- Route plotting between locations
- Turn-by-turn direction panel
- OpenStreetMap integration

## Tech Stack

| Layer | Technology |
|---|---|
| Frontend | ASP.NET Web Forms, HTML, CSS, JavaScript |
| Backend | C# |
| Database | Microsoft SQL Server |
| Charts | JavaScript charting library (donut, line, stacked bar) |
| Maps | Leaflet.js, OpenStreetMap, routing integration |

## Why This Project Matters

This is not a tutorial or sample dashboard. It is a production-style government analytics platform with:

- Real operational workflows
- Large-scale reporting use cases
- Map-based decision support
- Multi-screen dashboard design
- Data visualization for procurement monitoring

## Safe GitHub Strategy

Because this is government work, do **not** upload confidential source code or production database scripts publicly.

Instead, use this repository as a **case study repository**:
- Add clean screenshots with sensitive values hidden if needed
- Explain your role and responsibilities
- Mention the public-facing domain only if permitted
- Rebuild a demo version later using dummy/sample data

## Suggested Repository Structure

```
cg-paddy-dashboard-case-study/
├── README.md
├── screenshots/
│   ├── centers-dashboard.png
│   ├── farmer-dashboard.png
│   ├── procurement-kpi.png
│   ├── analytics-chart.png
│   ├── district-trend.png
│   └── map-routing.png
└── docs/
    ├── modules.md
    ├── tech-stack.md
    └── contributions.md
```

## README Sections to Add Later

### Screenshots
Add 5-6 screenshots from your actual dashboard.

### Challenges Solved
Examples:
- SQL aggregation for large procurement summaries
- Dynamic chart rendering from live database data
- Filter-driven reports
- Mapping and route plotting
- UI organization for multiple operational teams

### What I Learned
- Enterprise dashboard design in ASP.NET Web Forms
- SQL query optimization for reporting
- JavaScript chart integration inside Web Forms pages
- GIS/map visualization in line-of-business apps
- Production support mindset for live government systems

## Resume / Upwork Project Summary

**CG Paddy Online Dashboard – Chhattisgarh MARKFED**  
Built analytics dashboards, charts, and GIS-based map modules for a live paddy procurement platform using ASP.NET Web Forms, C#, MS SQL Server, and JavaScript. Developed KPI dashboards, district-wise trend reports, category-based charts, and routing-enabled map views for operational monitoring.

## Next Step

Create a second public repo later:

**cg-paddy-dashboard-demo**
- Built with React or HTML + JS
- Uses sample/dummy data
- Recreates the best dashboard screens publicly
- Safe to share with freelance clients
