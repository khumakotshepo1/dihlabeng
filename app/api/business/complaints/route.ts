import { sql } from "@/db/postgresql";
import { normalizePhoneNumber } from "@/utils/country-phone-codes";
import { emailChecker } from "@/utils/email-checker";
import { getErrorMessage } from "@/utils/error-message";

export async function POST(Request: Request) {
  try {
    // Get the request body
    const body = await Request.json();
    console.log("Received body:", body);

    // Destructure values from the body
    const { first_name, last_name, email, code, phone, name, description } = body;

    // Validate all required fields
    if (!first_name || !last_name || !email || !code || !phone || !name || !description) {
      console.error("Missing required fields", { first_name, last_name, email, code, phone, name, description });
      return new Response(JSON.stringify({ error: 'Missing required fields' }), { status: 400 });
    }

    // Normalize phone number
    const verifiedPhone = normalizePhoneNumber(phone, code);
    console.log("Verified Phone:", verifiedPhone);

    if (!verifiedPhone) {
      return new Response(JSON.stringify({ error: 'Invalid phone number' }), { status: 400 });
    }

    // Validate email
    const verifiedEmail = await emailChecker(email);
    console.log("Verified Email:", verifiedEmail);

    if (!verifiedEmail.isValid) {
      return new Response(JSON.stringify({ error: 'Invalid email address' }), { status: 400 });
    }

    // SQL query to insert the complaint into the database
    const { rows } = await sql.query(
      `INSERT INTO business_complaints (first_name, last_name, email, phone, name, description) 
       VALUES ($1, $2, $3, $4, $5, $6) RETURNING *`,
      [first_name, last_name, email, verifiedPhone, name, description]
    );

    // Log the rows returned from the query (usually one row with the inserted data)
    console.log("Inserted Complaint:", rows);

    // Respond with the inserted data
    return new Response(JSON.stringify({
      success: "Complaint lodged",
      data: rows[0] // Optionally return the inserted data
    }), { status: 201 });

  } catch (error) {
    // Catch and log any errors that occur during the process
    console.error("Error occurred:", error);
    return new Response(JSON.stringify({ error: getErrorMessage(error) }), { status: 500 });
  }
}
