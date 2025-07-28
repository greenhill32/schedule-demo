export default async (request, response) => {
  // This Vercel Function simulates booking an interview or meeting.
  // In a real application, this would integrate with a calendar service (e.g., Google Calendar, Calendly).

  if (request.method === 'POST') {
    const { interviewee_name, date, time_slot, duration_minutes } = request.body; // Data sent by the AI agent

    console.log(`Simulating interview booking for: ${interviewee_name}`);
    console.log(`Date: ${date}, Time: ${time_slot}, Duration: ${duration_minutes || 'not specified'} mins`);

    // Simulate a successful response
    response.status(200).json({
      status: "success",
      message: `Interview successfully simulated for ${interviewee_name} on ${date} at ${time_slot}.`,
      booking_id: `mock-booking-${Date.now()}`, // A unique ID for the simulated booking
      calendar_event_url: `https://mock-calendar.com/event/${Date.now()}` // Simulated calendar link
    });
  } else {
    // If it's not a POST request, tell them how to use it.
    response.status(405).json({
      status: "error",
      message: "This endpoint only accepts POST requests for booking interviews."
    });
  }
};