
import { sql } from "@/db/postgresql";
import { normalizePhoneNumber } from "@/utils/country-phone-codes";
import { getErrorMessage } from "@/utils/error-message";
import { Context } from "hono";

export const addComplaint = async (c: Context) => {
  try {
    // Get the request body
    const body = await c.req.json();
    console.log("Received body:", body);

    // Destructure values from the body
    const { first_name, last_name, email, code, phone, name, description } = body;

    // Validate all required fields
    if (!first_name || !last_name || !email || !code || !phone || !name || !description) {
      console.error("Missing required fields", { first_name, last_name, email, code, phone, name, description });
      return c.json({ error: 'Missing required fields' }, 400);
    }

    // Normalize phone number
    const verifiedPhone = normalizePhoneNumber(phone, code);
    console.log("Verified Phone:", verifiedPhone);

    // SQL query to insert the complaint into the database
    const { rows } = await sql.query(
      `INSERT INTO health_complaints (first_name, last_name, email, phone, name, description) 
       VALUES ($1, $2, $3, $4, $5, $6) RETURNING *`,
      [first_name, last_name, email, verifiedPhone, name, description]
    );

    // Log the rows returned from the query (usually one row with the inserted data)
    console.log("Inserted Complaint:", rows);

    // Respond with the inserted data
    return c.json({
      success: "Complaint lodged"
    });

  } catch (error) {
    // Catch and log any errors that occur during the process
    console.error("Error occurred:", error);
    return c.json({ error: getErrorMessage(error) }, 500);
  }
};
