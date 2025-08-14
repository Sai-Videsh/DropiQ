import { NextResponse } from "next/server"
import * as XLSX from "xlsx"
import { writeFileSync, existsSync, readFileSync } from "fs"
import { join } from "path"

const EXCEL_FILE_PATH = join(process.cwd(), "waitlist_emails.xlsx")

export async function POST(request: Request) {
  try {
    const { email } = await request.json()
    const valid = typeof email === "string" && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
    if (!valid) {
      return NextResponse.json({ ok: false, error: "Invalid email" }, { status: 400 })
    }

    // Load existing data or create new workbook
    let workbook: XLSX.WorkBook
    let worksheet: XLSX.WorkSheet | undefined
    let existingEmails: string[] = []

    if (existsSync(EXCEL_FILE_PATH)) {
      // Load existing Excel file
      const fileBuffer = readFileSync(EXCEL_FILE_PATH)
      workbook = XLSX.read(fileBuffer, { type: "buffer" })
      worksheet = workbook.Sheets[workbook.SheetNames[0]] || workbook.Sheets["Waitlist"]
      
      if (worksheet) {
        // Extract existing emails
        const data = XLSX.utils.sheet_to_json(worksheet, { header: 1 }) as string[][]
        if (data.length > 1) { // Skip header row
          existingEmails = data.slice(1).map(row => row[0]).filter(Boolean)
        }
      }
    } else {
      // Create new workbook
      workbook = XLSX.utils.book_new()
    }

    // Check if email already exists
    if (existingEmails.includes(email)) {
      return NextResponse.json({ ok: false, error: "Email already registered" }, { status: 400 })
    }

    // Add new email with timestamp
    const newRow = [email, new Date().toISOString()]
    
    if (!worksheet) {
      // Create new worksheet
      const data = [["Email", "Date Added"], newRow]
      worksheet = XLSX.utils.aoa_to_sheet(data)
      XLSX.utils.book_append_sheet(workbook, worksheet, "Waitlist")
    } else {
      // Append to existing worksheet
      const data = XLSX.utils.sheet_to_json(worksheet, { header: 1 }) as string[][]
      data.push(newRow)
      worksheet = XLSX.utils.aoa_to_sheet(data)
      workbook.Sheets[workbook.SheetNames[0]] = worksheet
    }

    // Save the Excel file
    const excelBuffer = XLSX.write(workbook, { type: "buffer", bookType: "xlsx" })
    writeFileSync(EXCEL_FILE_PATH, excelBuffer)

    console.log("Waitlist signup:", email)
    return NextResponse.json({ ok: true })
  } catch (error) {
    console.error("Error saving email:", error)
    return NextResponse.json({ ok: false, error: "Failed to save email" }, { status: 500 })
  }
}
