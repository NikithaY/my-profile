/*
  # Create contact submissions table

  1. New Tables
    - `contact_submissions`
      - `id` (uuid, primary key) - Unique identifier for each submission
      - `name` (text) - Name of the person submitting the form
      - `email` (text) - Email address of the submitter
      - `message` (text) - Message content from the contact form
      - `created_at` (timestamptz) - Timestamp when the submission was created

  2. Security
    - Enable RLS on `contact_submissions` table
    - Add policy for inserting contact form submissions (public access for form submissions)
    - Add policy for authenticated users to read all submissions (admin access)

  3. Notes
    - The table allows public insertions so visitors can submit the contact form
    - Only authenticated users (admin) can read the submissions
    - Data integrity is maintained with NOT NULL constraints on required fields
*/

CREATE TABLE IF NOT EXISTS contact_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  message text NOT NULL,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit contact form"
  ON contact_submissions
  FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE POLICY "Authenticated users can read submissions"
  ON contact_submissions
  FOR SELECT
  TO authenticated
  USING (true);
