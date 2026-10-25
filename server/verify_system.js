import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

async function main() {
  console.log('--- 1. AUDITING DATABASE USERS & ROLES ---');
  let users = await prisma.user.findMany({
    select: { id: true, email: true, role: true, name: true, leadStatus: true }
  });
  console.log(`Found ${users.length} users in database:`);
  users.forEach(u => console.log(`  - [ID ${u.id}] ${u.name} <${u.email}> (${u.role}) Status: ${u.leadStatus || 'N/A'}`));

  // Check if Admin exists, if not seed default admin
  let admin = users.find(u => u.role === 'ADMIN' || u.role === 'SUPERADMIN');
  if (!admin) {
    console.log('Seeding default Super Admin...');
    const hash = await bcrypt.hash('admin', 10);
    admin = await prisma.user.create({
      data: {
        name: 'Super Admin',
        email: 'admin@thecollegecompass.com',
        password: hash,
        role: 'SUPERADMIN'
      }
    });
    console.log('Created Super Admin:', admin.email);
  }

  // Check if Student exists, if not seed a sample student
  let student = users.find(u => u.role === 'STUDENT');
  if (!student) {
    console.log('Seeding test Student lead...');
    const hash = await bcrypt.hash('student123', 10);
    student = await prisma.user.create({
      data: {
        name: 'Aarav Sharma',
        email: 'aarav.sharma@example.com',
        password: hash,
        role: 'STUDENT',
        phone: '+91 98200 12345',
        city: 'Mumbai',
        state: 'Maharashtra',
        courseInterest: 'B.Tech Computer Science',
        examInterest: 'JEE Main',
        leadStatus: 'New Lead',
        adminNotes: 'Interested in top engineering colleges in Maharashtra.'
      }
    });
    console.log('Created Student:', student.email);
  }

  console.log('\n--- 2. AUDITING AUDIT LOGS & CRM TELEMETRY ---');
  const logsCount = await prisma.auditLog.count();
  console.log(`Total Audit Logs in DB: ${logsCount}`);

  console.log('\n--- 3. DATABASE VERIFICATION COMPLETE ---');
  await prisma.$disconnect();
}

main().catch(err => {
  console.error('Error during verification:', err);
  process.exit(1);
});
