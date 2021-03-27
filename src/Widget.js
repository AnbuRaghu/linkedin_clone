import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import InfoIcon from "@material-ui/icons/Info";
import React from "react";
import "./widget.css";

function Widget() {
  const newsArticle = (heading, subtitle) => (
    <div className="widget_article">
      <div className="widget_articleLeft">
        <FiberManualRecordIcon />
      </div>
      <div className="widget_articleRight">
        <h4>{heading}</h4>
        <p>{subtitle}</p>
      </div>
    </div>
  );
  return (
    <div className="widget">
      <div className="widget_header">
        <h2>LinkedIn News</h2>
        <InfoIcon />
      </div>
      {newsArticle("Anbu_React is back", "Top news-9099 readers")}
      {newsArticle("Corona virus Germany update", "Top news-699 readers")}
      {newsArticle("Bitcoin breaks $22k", "Top news-566 readers")}
      {newsArticle("Is Redux too good", "Top news-668 readers")}
      {newsArticle("Lock-down everywhere", "Top news-2004 readers")}
      {newsArticle("BMW hits new high", "Car-1543 readers")}
      {newsArticle(
        "Jobs for developer is in demand",
        "developer--1543 readers"
      )}
      {newsArticle("Artricles on web development", "Webdev-1543 readers")}
    </div>
  );
}

export default Widget;
