@RestController
@RequestMapping("/api/doctors")
@CrossOrigin
public class DoctorController {

    @Autowired
    private DoctorRepository doctorRepo;

    @GetMapping("/search")
    public List<Doctor> searchDoctors(@RequestParam String location, @RequestParam String specialization) {
        return doctorRepo.findByLocationContainingIgnoreCaseAndSpecializationContainingIgnoreCase(location, specialization);
    }

    // ✅ New: Get doctor by ID for detail page
    @GetMapping("/{id}")
    public ResponseEntity<Doctor> getDoctorById(@PathVariable Long id) {
        Optional<Doctor> doctor = doctorRepo.findById(id);
        return doctor.map(ResponseEntity::ok)
                     .orElseGet(() -> ResponseEntity.notFound().build());
    }
}
