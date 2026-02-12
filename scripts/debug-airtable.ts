#!/usr/bin/env bun

const AIRTABLE_API_KEY = "patVBnYfJ6iOrQN08.e851189b98ca38b4ce1eb7c764ca08f04c830d97103cba88018c9e4944a3717b";
const AIRTABLE_BASE_ID = "app8McJxchG5oZ9d8";
const AIRTABLE_TABLE_ID = "tbl5tMLZDfzHbcmrO";

const url = `https://api.airtable.com/v0/${AIRTABLE_BASE_ID}/${AIRTABLE_TABLE_ID}?maxRecords=1`;

try {
  const response = await fetch(url, {
    method: "GET",
    headers: {
      "Authorization": `Bearer ${AIRTABLE_API_KEY}`,
      "Content-Type": "application/json",
    },
  });
  console.log("Status:", response.status);
  console.log("Status Text:", response.statusText);
  const text = await response.text();
  console.log("Response:", text.substring(0, 500));
} catch (error) {
  console.error("Error:", error);
}
