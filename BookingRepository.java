public interface BookingRepository extends JpaRepository<Booking, Long> {
    List<Booking> findByDoctorId(Long doctorId);
}

// 📁 File: BookingController.java
@RestController
@RequestMapping("/api/bookings")
@CrossOrigin
public class BookingController {

    @Autowired
    private BookingRepository bookingRepo;

    @PostMapping
    public Booking createBooking(@RequestBody Booking booking) {
        return bookingRepo.save(booking);
    }

    @GetMapping("/doctor/{doctorId}")
    public List<Booking> getDoctorBookings(@PathVariable Long doctorId) {
        return bookingRepo.findByDoctorId(doctorId);
    }
}