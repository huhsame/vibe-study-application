#!/usr/bin/env bun
import { getApplicationByPhone } from "./airtable.ts";

const result = await getApplicationByPhone("01073697313");
if (result) {
  console.log("EXISTING_FOUND");
  console.log("ID:", result.id);
  console.log("TITLE:", result.fields["생성된 제목"] || "(없음)");
  console.log("STATUS:", result.fields["상태"] || "(없음)");
} else {
  console.log("NO_EXISTING");
}
