public interface DoctorRepository extends JpaRepository<Doctor, Long> {
    List<Doctor> findByLocationContainingIgnoreCaseAndSpecializationContainingIgnoreCase(String location, String specialization);
}
